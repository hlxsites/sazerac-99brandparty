function constructPayload(form) {
  const payload = {};
  [...form.elements].forEach((fe) => {
    if (fe.type === 'checkbox') {
      if (fe.checked) payload[fe.id] = fe.value;
    } else if (fe.id) {
      payload[fe.id] = fe.value;
    }
  });
  return payload;
}

async function submitForm(form, token) {
  const payload = constructPayload(form);
  payload.timestamp = new Date().toJSON();
  const url = `https://266117-714copperbee.adobeioruntime.net/api/v1/web/mailgun/sendmail?name=${payload.name}&phone=${payload.phone}&email=${payload.email}&note=${payload.note}&token=${token}`;

  const resp = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
  });
  await resp.text();
  return resp.status;
}

function createSelect(fd) {
  const select = document.createElement('select');
  select.id = fd.Field;
  if (fd.Placeholder) {
    const ph = document.createElement('option');
    ph.textContent = fd.Placeholder;
    ph.setAttribute('selected', '');
    ph.setAttribute('disabled', '');
    select.append(ph);
  }
  if (fd.State && fd.State === 'disabled') {
    select.setAttribute('disabled', '');
  }
  const values = fd.Values ? fd.Values.split(',') : [];

  fd.Options.split(',').forEach((o, i) => {
    const option = document.createElement('option');
    option.textContent = o.trim();
    option.value = values[i]?.trim() ?? o.trim();
    select.append(option);
  });
  if (fd.Mandatory) {
    select.setAttribute('required', 'required');
  }
  if (fd.Enable) {
    select.addEventListener('change', () => {
      const enable = document.getElementById(fd.Enable);
      enable.removeAttribute('disabled');
    });
  }
  return select;
}

function createButton(fd) {
  const button = document.createElement('button');
  button.textContent = fd.Label;
  button.classList.add('button');
  if (fd.Type === 'submit') {
    button.addEventListener('click', async (event) => {
      const form = button.closest('form');
      if (fd.Placeholder) form.dataset.action = fd.Placeholder;
      if (form.checkValidity()) {
        event.preventDefault();
        button.setAttribute('disabled', '');
        const isFct = fd?.Extra.includes('()');
        if (isFct) {
          const fct = fd.Extra.replace('()', '');
          await window[fct](form);
          button.removeAttribute('disabled');
        } else {
          // eslint-disable-next-line no-undef
          grecaptcha.ready(() => {
            // eslint-disable-next-line no-undef
            grecaptcha.execute('6LcObf0oAAAAADzBdyJ7hBbcGKdh-bkk4uWcq6-0', { action: 'submit' }).then(async (token) => {
              submitForm(form, token).then((status) => {
                const redirectTo = fd.Extra;
                if (status === 200) {
                  window.location.href = `${redirectTo}?status=sent`;
                } else {
                  window.location.href = `${redirectTo}?status=failed`;
                }
              });
            });
          });
        }
      }
    });
  }
  return button;
}

function createInput(fd) {
  const input = document.createElement('input');
  input.type = fd.Type;
  input.id = fd.Field;
  input.setAttribute('placeholder', fd.Placeholder);
  if (fd.Mandatory === 'x') {
    input.setAttribute('required', 'required');
  }
  return input;
}

function createTextArea(fd) {
  const input = document.createElement('textarea');
  input.id = fd.Field;
  input.setAttribute('placeholder', fd.Placeholder);
  if (fd.Mandatory === 'x') {
    input.setAttribute('required', 'required');
  }
  return input;
}

function createLabel(fd) {
  const label = document.createElement('label');
  label.setAttribute('for', fd.Field);
  label.textContent = fd.Label;
  if (fd.Mandatory === 'x') {
    label.classList.add('required');
  }
  return label;
}

function applyRules(form, rules) {
  const payload = constructPayload(form);
  rules.forEach((field) => {
    const { type, condition: { key, operator, value } } = field.rule;
    if (type === 'visible') {
      if (operator === 'eq') {
        if (payload[key] === value) {
          form.querySelector(`.${field.fieldId}`).classList.remove('hidden');
        } else {
          form.querySelector(`.${field.fieldId}`).classList.add('hidden');
        }
      }
    }
  });
}

function fill(form) {
  const { action } = form.dataset;
  if (action === '/tools/bot/register-form') {
    const loc = new URL(window.location.href);
    form.querySelector('#owner').value = loc.searchParams.get('owner') || '';
    form.querySelector('#installationId').value = loc.searchParams.get('id') || '';
  }
}

async function createForm(formURL) {
  const { pathname } = new URL(formURL);
  const resp = await fetch(pathname);
  const json = await resp.json();
  const form = document.createElement('form');
  const rules = [];
  // eslint-disable-next-line prefer-destructuring
  form.dataset.action = pathname.split('.json')[0];
  json.data.forEach((fd) => {
    fd.Type = fd.Type || 'text';
    const fieldWrapper = document.createElement('div');
    const style = fd.Style ? ` form-${fd.Style}` : '';
    const fieldId = `form-${fd.Type}-wrapper${style}`;
    fieldWrapper.className = fieldId;
    fieldWrapper.classList.add('field-wrapper');
    switch (fd.Type) {
      case 'select':
        if (fd.Label) fieldWrapper.append(createLabel(fd));
        fieldWrapper.append(createSelect(fd));
        break;
      case 'text-area':
        if (fd.Label) fieldWrapper.append(createLabel(fd));
        fieldWrapper.append(createTextArea(fd));
        break;
      case 'submit':
        fieldWrapper.append(createButton(fd));
        break;
      default:
        if (fd.Label) fieldWrapper.append(createLabel(fd));
        fieldWrapper.append(createInput(fd));
    }

    if (fd.Rules) {
      try {
        rules.push({ fieldId, rule: JSON.parse(fd.Rules) });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`Invalid Rule ${fd.Rules}: ${e}`);
      }
    }
    form.append(fieldWrapper);
  });

  form.addEventListener('change', () => applyRules(form, rules));
  applyRules(form, rules);
  fill(form);
  return (form);
}

export default async function decorate(block) {
  const form = block.querySelector('a[href$=".json"]');
  if (form) {
    form.parentElement.classList.add('button-container');
    form.replaceWith(await createForm(form.href));
    if (document.location.href.includes('status=sent')) {
      const div = document.createElement('div');
      div.innerHTML = 'Thank you for your message. It has been sent.';
      div.classList.add('success');
      document.querySelector('.section').appendChild(div);
    } else if (document.location.href.includes('status=failed')) {
      const div = document.createElement('div');
      div.innerHTML = 'Your message could not be sent. Please contact by phone or email.';
      div.classList.add('failed');
      document.querySelector('.section').appendChild(div);
    }
  }
}

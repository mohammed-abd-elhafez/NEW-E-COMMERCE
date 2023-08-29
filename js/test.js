const { JSDOM } = require('jsdom');

// Mock DOM environment
const dom = new JSDOM();
global.document = dom.window.document;

// Import the functions you want to test
const {
  hideAllMethodContents,
  uncheckAllCheckboxes,
  checkClickedCheckbox,
  toggleMethodContent,
} = require('./your-code-file'); // Replace with the actual file path

describe('Testing the behavior', () => {
  test('hideAllMethodContents should remove "show" class from all method-content elements', () => {
    // Create a dummy method content
    const methodContent = document.createElement('div');
    methodContent.classList.add('method-content', 'show');
    document.body.appendChild(methodContent);

    hideAllMethodContents();

    expect(methodContent.classList.contains('show')).toBe(false);
  });

  test('uncheckAllCheckboxes should uncheck all custom-checkboxes', () => {
    // Create dummy custom-checkbox elements
    const checkbox1 = document.createElement('input');
    checkbox1.type = 'checkbox';
    checkbox1.checked = true;
    document.body.appendChild(checkbox1);

    const checkbox2 = document.createElement('input');
    checkbox2.type = 'checkbox';
    checkbox2.checked = true;
    document.body.appendChild(checkbox2);

    uncheckAllCheckboxes();

    expect(checkbox1.checked).toBe(false);
    expect(checkbox2.checked).toBe(false);
  });

  // You can similarly write test cases for other functions
  // ...

  // Don't forget to clean up the DOM after each test
  afterEach(() => {
    document.body.innerHTML = '';
  });
});

/*
 ** Check Object is Empty or not.
 */
const isEmpty = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
    return true;
  });
};

/*
 ** Create and Render Element into target with attributes.
 */
const createElements = ({
  tag,
  attributes,
  content,
  children,
}) => {
  if (!tag || typeof tag !== 'string') {
    console.error('tag argement is required and string');
    return null;
  }
  const element = document.createElement(tag);
  if (Array.isArray(attributes) && attributes.length) {
    attributes.forEach(({
      name,
      value,
    }) => {
      element.setAttribute(name, value);
    });
  }
  if (content && typeof content === 'string') {
    element.innerHTML = content;
  }
  if (Array.isArray(children) && children.length) {
    children.forEach((child) => {
      // Reculsive methods
      // 181016 HJW childEelement = createElements 오타발견. 수정
      const childElement = createElements({
        tag: child.tag,
        attributes: child.attributes,
        content: child.content,
        children: child.children,
      });
      element.appendChild(childElement);
    });
  }
  return element;
};

const createAndRenderElement = ({
  tag,
  attributes,
  content,
  children,
}, target, isClean = false) => {
  const element = createElements({
    tag,
    attributes,
    content,
    children,
  });
  if (isClean) {
    while (target.hasChildNodes()) {
      target.removeChild(target.lastChild);
    }
  }
  target.appendChild(element);
};

import * as contentful from "contentful";

const fetchEntries = () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });
  return client
    .getEntries({
      content_type: "globalCopy",
      include: 2
    })
    .then(response => response.items)
    .catch(err => console.error(err));
};

export const getAllCopy = () => {
  return fetchEntries().then(response => {
    // get data for all components
    const data = response[0].fields.componentCopy;

    // extract copy entries per component
    return data.map(({ fields }) => {
      let entries = [];
      fields.copies.forEach(f => {
        entries[f.fields.id] = f.fields.copy;
      });
      return {
        component: fields.componentName,
        copies: entries
      };
    });
  });
};

export const getCopyForComponent = (copy, componentName) => {
  return copy.find(t => t.component === componentName);
};

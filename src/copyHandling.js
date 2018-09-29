import * as contentful from "contentful";

const DEFAULT_LOCALE = "de";

const fetchEntries = () => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });
  return client
    .getEntries({
      content_type: "globalCopy",
      include: 2,
      locale: "*"
    })
    .then(response => response.items)
    .catch(err => console.error(err));
};

export const getAllCopy = () => {
  return fetchEntries().then(response => {
    // get data for all components
    const data = response[0].fields.componentCopy[DEFAULT_LOCALE];
    // extract copy entries per component
    return data.map(({ fields }) => {
      let entries = [];
      fields.copies[DEFAULT_LOCALE].forEach(f => {
        entries[f.fields.id[DEFAULT_LOCALE]] = f.fields.copy[DEFAULT_LOCALE];
      });
      return {
        component: fields.componentName[DEFAULT_LOCALE],
        copies: entries
      };
    });
  });
};

export const getCopyForComponent = (translations, componentName) => {
  return translations.find(t => t.component === componentName);
};

export function resolveContentLink(link, language) {
  let resultLink;
  switch (link.type) {
    case 'coffee':
      resultLink = `/coffees/${link.urlSlug}`;
      break;
    default:
      resultLink = '';
  }

  if (language) {
    resultLink = `/${language.toLowerCase()}${resultLink}`;
  }

  return resultLink;
}

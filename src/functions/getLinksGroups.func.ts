const getLinksGroups = (original: {name: string; url: string}[]) => {
  const links = [...original];
  const odd = links.length%2 == 0;
  const l = links.length;
  const left = odd?links.splice(0, l/2):links.splice(0, (l - 1)/2);

  return { left, right: links };
}

export default getLinksGroups;

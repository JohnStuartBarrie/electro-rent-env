import Cookies from 'universal-cookie';
import {
  selectedProjectCookieName,
  defaultProjectId
} from './util/selected_project';

// kentico cloud
import { DeliveryClient, TypeResolver } from 'kentico-cloud-delivery';

// models
import { Coffee } from './model/coffee';

const projectId = '975bf280-fd91-488c-994c-2f04416e5ee3';
const previewApiKey = '';

// configure type resolvers
let typeResolvers = [
  new TypeResolver('coffee', () => new Coffee())
];

const cookies = new Cookies(document.cookies);
let currentProjectId = projectId || cookies.get(selectedProjectCookieName);
if (currentProjectId) {
  cookies.set(selectedProjectCookieName, currentProjectId, { path: '/' });
} else {
  currentProjectId = defaultProjectId;
}

const isPreview = () => previewApiKey !== '';

let KenticoClient = new DeliveryClient({
  projectId: currentProjectId,
  typeResolvers: typeResolvers,
  previewApiKey: previewApiKey,
  enablePreviewMode: isPreview()
});

const resetKenticoClient = newProjectId => {
  KenticoClient = new DeliveryClient({
    projectId: newProjectId,
    typeResolvers: typeResolvers,
    previewApiKey: previewApiKey,
    enablePreviewMode: isPreview()
  });
  const cookies = new Cookies(document.cookies);
  cookies.set(selectedProjectCookieName, newProjectId, { path: '/' });
};

export { KenticoClient, resetKenticoClient };

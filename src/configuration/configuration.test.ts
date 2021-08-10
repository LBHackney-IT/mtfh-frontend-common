import { getSuccess } from '../test-utils';
import {
  featureToggleStore,
  getConfiguration,
  hasToggle,
} from './configuration';

const initialStore = featureToggleStore.getValue();

beforeEach(() => {
  featureToggleStore.next(initialStore);
  window.localStorage.removeItem('features');
});

test('configuration is set from instatiation', () => {
  expect(hasToggle('MMH.SearchTenure')).toBe(false);
});

test('configuration is hydrated from localStorage first', async () => {
  getSuccess([], 'api/v1/configuration');
  window.localStorage.setItem(
    'features',
    JSON.stringify({ MMH: { SearchTenure: true } })
  );
  await getConfiguration();
  expect(hasToggle('MMH.SearchTenure')).toBe(true);
});

test('configuration not hydrated if localStorage is malformed', async () => {
  getSuccess([], 'api/v1/configuration');
  window.localStorage.setItem('features', JSON.stringify(1));
  await getConfiguration();
  expect(hasToggle('MMH.SearchTenure')).toBe(false);
});

test('configuration is hydrated from api', async () => {
  getSuccess(
    [{ type: 'MMH', featureToggles: { SearchTenure: true } }],
    'api/v1/configuration'
  );
  await getConfiguration();
  expect(hasToggle('MMH.SearchTenure')).toBe(true);
});

test('configuration is persisted to localStorage on success', async () => {
  getSuccess(
    [{ type: 'MMH', featureToggles: { SearchTenure: true } }],
    'api/v1/configuration'
  );
  await getConfiguration();
  expect(window.localStorage.getItem('features')).toBe(
    '{"MMH":{"SearchTenure":true}}'
  );
});

import { createSelector } from '@reduxjs/toolkit';

// export const selectContactsFilter = state => state.filters;
// export const selectContactsCheckbox = state => state.checked;
// export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectContacts = createSelector(
  [state => state.contacts.contacts.items, state => state.contacts.filters],
  (items, filter) => {
    const filterQuery = filter.toLowerCase();
    return filterQuery === ''
      ? items
      : items.filter(
          item =>
            item.name.toLowerCase().includes(filterQuery) ||
            item.number.toLowerCase().includes(filterQuery)
        );
  }
);

export const selectContactsCheckbox = createSelector(
  [state => state.contacts.checked],
  checked => {
    return checked;
  }
);

export const selectContactsIsLoading = createSelector(
  [state => state.contacts.contacts.isLoading],
  isLoading => {
    return isLoading;
  }
);

export const selectContactsFilter = createSelector(
  [state => state.contacts.filters],
  filters => {
    return filters;
  }
);

export const selectFilter = state => state.filters;
export const selectCheckbox = state => state.checked;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectContacts = state => {
  const filterQuery = state.filters.toLowerCase();
  return filterQuery === ''
    ? state.contacts.items
    : state.contacts.items.filter(
        item =>
          item.name.toLowerCase().includes(filterQuery) ||
          item.number.toLowerCase().includes(filterQuery)
      );
};

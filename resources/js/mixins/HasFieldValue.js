const sanitizeValue = (value) => {
  while (typeof value === 'string') {
    try {
      value = JSON.parse(value);
    } catch {
      value = null;
    }
  }
  if (!value) {
    value = [];
  }
  return value;
};

export default {
  computed: {
    shouldDisplayIndexAsList() {
      return this.field.indexAsList
    },

    shouldDisplayDetailsAsTotal() {
      return this.field.detailsAsTotal
    },

    getIndexListMaxItems() {
      return this.field.indexListMaxItems
    },

    fieldHasValue() {
        let fieldValue = sanitizeValue(this.field.value);
        return fieldValue && Array.isArray(fieldValue) && fieldValue.length;
    },

    fieldValue() {
      if (!this.usesCustomizedDisplay && !this.fieldHasValue) {
        return null
      }

      if (this.field.displayedAs) {
        return String(this.field.displayedAs)
      } else {
        return sanitizeValue(this.field.value);
      }
    }
  }
};

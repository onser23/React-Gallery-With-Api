const INITIAL_STATE = {
  allGallery: [],
  searcedText: "",
  previewImages: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ALLGALLERY":
      return { ...state, allGallery: action.payload };

    case "SET_SEARCEDTEXT":
      return { ...state, searcedText: action.payload };

    case "SET_PREVIEWIMAGES":
      return { ...state, previewImages: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

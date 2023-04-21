export const setAllGallery = (allGallery) => {
  return {
    type: "SET_ALLGALLERY",
    payload: allGallery,
  };
};

export const setSearcedText = (searcedText) => {
  return {
    type: "SET_SEARCEDTEXT",
    payload: searcedText,
  };
};

export const setPreviewImages = (previewImages) => {
  return {
    type: "SET_PREVIEWIMAGES",
    payload: previewImages,
  };
};

export const setLoading = (loading) => {
  return {
    type: "SET_LOADING",
    payload: loading,
  };
};

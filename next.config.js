module.exports = {
    images: {
        loader: "imgix",
        path: "",
    },
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  };
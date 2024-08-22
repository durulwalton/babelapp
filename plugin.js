module.exports = function myPlugin({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name;
        path.node.name = [...name].reverse().join(" ");
      },
    },
  };
};

var Dog;
(function (Dog) {
  Dog["name"] = "happy";
  Dog[(Dog["age"] = 12)] = "age";
})(Dog || (Dog = {}));
export default Dog;

const checkBody = (body) => {
  if (
    body.nameOfPet &&
    body.nameOfOwner &&
    body.age &&
    body.type &&
    body.gender
  ) {
    return true;
  }
  return false;
};

module.exports = { checkBody };

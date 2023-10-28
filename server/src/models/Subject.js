module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    subjectId: DataTypes.STRING,
    subjectEngName: DataTypes.STRING,
    subjectThaiName: DataTypes.STRING,
    affiliation: DataTypes.STRING,
    credit: DataTypes.STRING,
    subjectType: DataTypes.STRING,
    numberOfpeople: DataTypes.STRING,
    yearOpen: DataTypes.STRING,
    professor: DataTypes.STRING,
  })

  return Subject;
}

import cms from "top/_cms.ts";

cms.git();

cms.auth({
  manolo: {
    name: "Manolo",
    password: "manolo",
  }
})

export default cms;

import faker from "faker/locale/en";
import fs from "fs";
import path from "path";

const messages = Array(25)
  .fill(0)
  .map(() => {
    const time = faker.date.past().getTime();
    return {
      id: faker.datatype.uuid(),
      createdTime: time,
      updatedTime: time,
      message: faker.lorem.sentence(),
      username: faker.internet.userName(),
    };
  });

fs.writeFileSync(
  path.resolve(__dirname, "seed.json"),
  JSON.stringify(
    {
      messages,
    },
    null,
    2
  ),
  { encoding: "utf-8" }
);

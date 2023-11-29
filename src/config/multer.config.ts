import { memoryStorage } from "multer";

export const MulterConfig = {
  storage: memoryStorage(),
};

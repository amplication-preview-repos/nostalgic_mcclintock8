import { Url as TUrl } from "../api/url/Url";

export const URL_TITLE_FIELD = "id";

export const UrlTitle = (record: TUrl): string => {
  return record.id?.toString() || String(record.id);
};

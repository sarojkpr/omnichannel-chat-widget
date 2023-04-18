import { Md5 } from "md5-typescript";
import { Constants } from "./Contants";

export const getWidgetCacheId = (widgetId: string, widgetinstanceId: string, orgId: string): string => {
    const widgetCacheId = `${widgetinstanceId}_${orgId}_${widgetId}`;
    return Md5.init(widgetCacheId);
};

export const uuidv4 = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export const tokenGenerateNew = () => {
    const sJWT = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YjA1NzNiYy1lYmE4LTRmYzYtOTcyZS04OTg3OTc5OGUzOTkiLCJsd2ljb250ZXh0cyI6IntcIkNhc2VOdW1iZXJcIjp7XCJ2YWx1ZVwiOlwiMjIxMTA5MDAyMDAwMDM4MFwiLFwiaXNEaXNwbGF5YWJsZVwiOlwidHJ1ZVwifSxcIkN1cnJlbnRVc2VyRW1haWxcIjp7XCJ2YWx1ZVwiOlwidGVzdHVzZXJAbWFpbC5jb21cIixcImlzRGlzcGxheWFibGVcIjpcInRydWVcIn0sXCJQcm9kdWN0TmFtZVwiOntcInZhbHVlXCI6XCJBenVyZVwiLFwiaXNEaXNwbGF5YWJsZVwiOlwidHJ1ZVwifX0iLCJpYXQiOjE2ODE3Nzc1NjIsImlzcyI6ImNvbnRvc29oZWxwLmNvbSIsImV4cCI6MTY4MTc4MTE5MiwibmJmIjoxNjgxNzc3NTYyfQ.GpF7cUhGYBwDksU0bRu8xQ0H3EROBl__5LN3FDlQmk99FnP_F7z82Y-T7eRKEXyH-QMH7rPIRjXF22P2e-Et7K9vs4aGEckkK1OL6GhWTOrC6K-5XJd7kmcABIVLswKWBw7bsP6DFWx-r1VToBOtTNofyllL1_g3j-xiSM_VIWU1SfqiEp0YyuxmauZhbtadJh6R4UcC78Wakzm2e_toboiUq-mxi6-AuHl52h6X71y8YtscrdCFfgQ2G32RyfhGXA8_DWP_y1-WjKq-pwanPl1YY9UqbD9mNS8mbA96QfUUe9XvG-UZKtC-VzkI8yrHQILTURTlH5X6jXqE-2q7mA";
    return Promise.resolve(sJWT);
}
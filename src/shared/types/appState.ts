import {AlbumInfo} from "../../features/albums/types";
import {MemberInfo} from "../../features/members/types";
import {UserInfo} from "../../features/auth/types";

export interface AppState {
  albums: AlbumInfo[];
  members: MemberInfo[];
  curranUser: UserInfo
}

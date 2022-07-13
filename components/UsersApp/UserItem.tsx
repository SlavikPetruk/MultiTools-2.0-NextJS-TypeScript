import { FC } from "react"
import { UserType } from "./types/types"

interface UserItemProps {
    user: UserType;
    onClick: (user: UserType)=> void;
}

export const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div 
            style={{padding:'15px', border:'1px solid gray'}}
            onClick={() => onClick(user)}
            >
        {user.id}. {user.name} live in {user.address.city} in street {user.address.street}
        </div>
    )
}

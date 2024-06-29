import { usersArray } from "./users";
import { usersInfoArray } from "./userInfo";

interface UserJobPosition {
    name: string;
    position: string;
    age: number;
    gender: string;
}

export function getUsersJobPositions(): UserJobPosition[] {
    const result: UserJobPosition[] = [];

    usersArray.forEach((user) => {
        const userInfo = usersInfoArray.find(
            (userInfoItem) => userInfoItem.userid === user.userid
        );

        if (userInfo) {
            result.push({
                name: userInfo.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: user.gender,
            });
        }
    });

    return result;
}

const usersPositions = getUsersJobPositions();

console.log(usersPositions);
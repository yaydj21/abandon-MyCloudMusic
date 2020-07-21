import service from "@/utils/request";

export function GetDes(data){
    return service.request({
        method: "get",
        url:"/artist/desc?id=12276375",
        data
    })
}

export function findMusicBanner(data){
    return service.request({
        method:'get',
        url:"/banner",
        data
    })
}
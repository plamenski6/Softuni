function songs(arr) {

    let n = arr.shift();
    let typeList = arr.pop();
    for (let i = 0; i < arr.length; i++) {
        let [type, nameSong, time] = arr[i].split("_");
        if (typeList === type || typeList === "all") {
            console.log(nameSong);
        }
    }

}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

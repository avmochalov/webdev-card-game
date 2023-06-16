export function time(fullGameTime: number) {
    let min = String(Math.trunc(fullGameTime / 60));
    let sec = String(Math.round(fullGameTime % 60));
    return `${min.length < 2 ? '0' + min : min}.${
        sec.length < 2 ? '0' + sec : sec
    }`;
}

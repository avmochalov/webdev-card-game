export function time(fullGameTime: number) {
    const min = String(Math.trunc(fullGameTime / 60));
    const sec = String(Math.round(fullGameTime % 60));
    return `${min.length < 2 ? '0' + min : min}.${
        sec.length < 2 ? '0' + sec : sec
    }`;
}

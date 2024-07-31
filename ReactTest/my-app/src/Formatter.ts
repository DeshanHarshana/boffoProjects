export class Formatter{
    public static formatNametoHex(data:any):string{
        return data
        .split('')
        .map((char:any) => char.charCodeAt(0).toString(16))
        .join('');
    }
}
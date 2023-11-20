export default interface Entry{
    id: number;
    body: string;
    emoji: Emoji | null;
    dataCreacio: Date;
    userId: number;
}
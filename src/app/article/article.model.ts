export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, voles?: number) {
        this.title = title;
        this.link = link;
        this.votes = voles || 0;
    }

    voteUp(): boolean {
        this.votes += 1;
        return false;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    domain():string {
        try{
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch(err) {
            return null;
        }
    }
}
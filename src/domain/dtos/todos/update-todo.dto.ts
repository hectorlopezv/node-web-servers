export class UpdateTodoDto{
    constructor(private readonly text?: string, private readonly completedAt?: Date){}
    public get values(){
        const returnObject: {[key: string]: any} = {};
        if(this.text) returnObject.text = this.text;
        if(this.completedAt) returnObject.completedAt = this.completedAt;
        return returnObject;
    }
    static create(props: {[key: string]: any}): [string?, UpdateTodoDto?]{
        const { text, completedAt } = props;
        let newCompletedAt = completedAt;

        if(completedAt){
            newCompletedAt = new Date(completedAt);

            if(newCompletedAt.toString() === 'Invalid Date'){
                return ['completedAt is not a valid date', undefined];
            }

            return [undefined, new UpdateTodoDto(text)];

        }
        if(!text) return ['text is required', undefined];
        return [undefined, new UpdateTodoDto(text, newCompletedAt)];

    }
}
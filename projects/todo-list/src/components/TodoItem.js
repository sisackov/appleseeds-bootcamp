export default class TodoItem {
    constructor(
        id,
        title,
        description,
        location,
        modifiedAt,
        completed = false
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.modifiedAt = modifiedAt;
        this.completed = completed;
    }
}

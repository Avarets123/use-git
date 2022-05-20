
namespace Command {

    class User {
        constructor(public userId: number) { }
    }

    class CommandHistory {
        public commands: Command[] = [];

        push(command: Command) {
            this.commands.push(command);
        }

        remove(command: Command) {
            this.commands = this.commands.filter(el => el.commandId !== command.commandId);
        }
    }

    abstract class Command {
        public commandId: number;

        abstract execute(): void;

        constructor(public history: CommandHistory) {
            this.commandId = Math.random();
        }
    }

    class AddUserCommand extends Command {
        constructor(private user: User, private receiver: UserService, history: CommandHistory) {
            super(history);
        }

        execute(): void {
            this.receiver.saveUser(this.user);
            this.history.push(this);
        }

        undo() {
            this.receiver.deleteUser(this.user.userId);
            this.history.remove(this);
        }

    }

    export class UserService {

        saveUser(user: User) {
            console.log(`Пользователь с id: ${user.userId} сохранен`);
        }

        deleteUser(userId: number) {
            console.log(`Пользователь с id: ${userId} удален !`);
        }
    }


    export class Controller {
        receiver: UserService;
        history: CommandHistory = new CommandHistory();

        addReceiver(receiver: UserService) {
            this.receiver = receiver
        }

        run() {
            const addUserCommand = new AddUserCommand(
                new User(1),
                this.receiver,
                this.history
            );
            addUserCommand.execute()
            console.log(addUserCommand.history);
            addUserCommand.undo();
            console.log(addUserCommand.history)
        }
    }
}

const controllerCommand = new Command.Controller();
controllerCommand.addReceiver(new Command.UserService());
controllerCommand.run();
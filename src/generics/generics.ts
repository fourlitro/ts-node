export const printObject = ( argument: any) => {
    console.log(argument);
}

//forma tradicuonal
export function genericFunction<T> ( argument: T):T { //con T hace que la funcion sea generica
    return argument;
}

export const genericFunctionArrow = <T> ( argument: T) => argument;
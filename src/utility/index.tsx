class utility {

    compareByName = ( a, b ) => {
        if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
        return 0;
    };

    compareByAge = ( a, b ) => {
        if ( a.age < b.age ){
            return -1;
        }
        if ( a.age > b.age ){
            return 1;
        }
        return 0;
    }
};

  export default new utility();
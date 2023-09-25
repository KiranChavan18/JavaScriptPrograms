let marks={
    Vinod: 50,
    Ramesh:70,
    Karan:56,
    Raju:82
}
for(let i=0 ; i<Object.keys(marks).length; i++){
    console.log("marks of "+ Object.keys(marks)[i]+ "are "+ marks[Object.keys(marks)[i]]);
}
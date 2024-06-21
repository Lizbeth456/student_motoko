import Array "mo:base/Array";

actor StudentList{

  type Student = {
    id : Nat;
    name : Text;
    lastName : Text;
    grade : Nat;
    group : Nat;
    teacherName: Text;
  };

  var students : [Student] = [
    {
      id = 1; 
      name = "Fulanito";
      lastName = "Salazar";
      grade = 9;
      group = 5;
      teacherName = "Mtra. Sanchez"; 
    }
  ];

  public func addStudent(name: Text, lastName: Text, grade : Nat, group : Nat, teacherName : Text) : async Bool {
    let newId = Array.size(students) + 1;
    let newStudent = {
      id = newId; 
      name = name;
      lastName = lastName;
      grade = grade;
      group = group;
      teacherName = teacherName; 
    };
    students := Array.append<Student>(students, [newStudent]);
    return true;
  };

  public func getAllStudents():async[Student]{
    return students;
  };

  public func getStudentById(id : Nat): async ?Student {
    return Array.find<Student>(students, func(m) {m.id == id});
  };

  public func updateStudent(id : Nat, name: Text, lastName: Text, grade : Nat, group : Nat, teacherName : Text) : async Bool {
    let studentToUpdate = Array.find<Student>(students, func(student){student.id == id});

    switch (studentToUpdate){
      case(null){return false};
      case(?studentToUpdate){
        let updatedStudent = {
          id = id;
          name = name;
          lastName = lastName;
          grade = grade;
          group = group;
          teacherName = teacherName; 
        };
        students := Array.map<Student, Student>(students, func(m){if (m.id == id) {updatedStudent} else{m}});
        return true;
      };
    };
  };

  public func deleteStudent(id : Nat) : async Bool {
    let student = Array.find<Student>(students, func(student) {student.id == id});
    if (student != null){
      students := Array.filter<Student>(students, func(student) {student.id !=id});
      return true;
    }else{
      return false; 
    }
  }
};


$(document).ready(function () {
	$('#name').keyup(function (e) {
		var nameValue = $('#name').val();
		setStudentName(nameValue);
	});


	var setStudentName = function (name) {
		$("#student-name").html(name);
	};

	setStudentName ('DEBE DEFINIR EL NOMBRE');

});


$(document).ready(function () {
	$('#years').keyup(function (e) {
		var yearsValue = $('#years').val();
		setStudentYears(yearsValue);
	});


	var setStudentYears = function (years) {
		$("#student-years").html(years);
	};

	setStudentYears ('DEBE DEFINIR LA EDAD');

});


$(document).ready(function () {
	$('#level').keyup(function (e) {
		var levelValue = $('#level').val();
		setStudentLevel(levelValue);
	});


	var setStudentLevel = function (level) {
		$("#student-level").html(level);
	};

	setStudentLevel ('DEBE DEFINIR EL CURSO');

});

$(document).ready(function () {
	$('#school').keyup(function (e) {
		var schoolValue = $('#school').val();
		setStudentSchool(schoolValue);
	});


	var setStudentSchool = function (school) {
		$("#student-school").html(school);
	};

	setStudentSchool ('DEBE DEFINIR EL INSTITUTO');


$(".subject").click(function(){
	$('#favorite-subjects').append($(this));

});

});

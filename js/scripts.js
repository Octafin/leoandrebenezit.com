$(document).ready(function() {

  //DIAMOND
  // hide diamond element on page load
 $('#left').css('opacity', 0);

 $('#left').waypoint(function() {
     $('#left').addClass('bounceInLeft');
     $('#left').css('opacity', 1);
 }, { offset: '70%' });

 // BRUSH
 //hide element on page load
$('#brush').css('opacity', 0);

$('#brush').waypoint(function() {
    $('#brush').addClass('bounceInUp');
    $('#brush').css('opacity', 1);
}, { offset: '70%' });

// HEART
// hide diamond element on page load
$('#heart').css('opacity', 0);

$('#heart').waypoint(function() {
   $('#heart').addClass('bounceInRight');
   $('#heart').css('opacity', 1);
}, { offset: '70%' });

$('#dna').css('opacity', 0);

$('#dna').waypoint(function() {
    $('#dna').addClass('bounceInRight');
    $('#dna').css('opacity', 1);
}, { offset: '70%' });

// my Name
$('#myName').css('opacity', 0);

$('#myName').waypoint(function() {
    $('#myName').addClass('bounceInRight');
    $('#myName').css('opacity', 1);
}, { offset: '70%' });

// my Site
$('#mySite').css('opacity', 0);

$('#mySite').waypoint(function() {
    $('#mySite').addClass('bounceInRight');
    $('#mySite').css('opacity', 1);
}, { offset: '70%' });

// my Email
$('#myEmail').css('opacity', 0);

$('#myEmail').waypoint(function() {
    $('#myEmail').addClass('bounceInRight');
    $('#myEmail').css('opacity', 1);
}, { offset: '70%' });

// my Number
$('#myNum').css('opacity', 0);

$('#myNum').waypoint(function() {
    $('#myNum').addClass('bounceInRight');
    $('#myNum').css('opacity', 1);
}, { offset: '70%' });

// my Languages
$('#myLanguages').css('opacity', 0);

$('#myLanguages').waypoint(function() {
    $('#myLanguages').addClass('bounceInRight');
    $('#myLanguages').css('opacity', 1);
}, { offset: '70%' });


//$('#skills-icon').waypoint(function() {
  var bar = new ProgressBar.Line('#progress_db', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 2400,
  color: '#222222',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
  });

bar.animate(0.7);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_js', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_docker', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_python', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_terminal', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_git', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_css', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#progress_html', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0


var bar = new ProgressBar.Line('#progress_react', {
strokeWidth: 4,
easing: 'easeInOut',
duration: 2400,
color: '#222222',
trailColor: '#eee',
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'}
});

bar.animate(0.5);  // Number from 0.0 to 1.0

//}, { offset: '10%' });
});

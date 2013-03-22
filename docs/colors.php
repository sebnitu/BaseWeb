<?php
////
// Color Palette Arrays
////
// Palette
$palette = array(
    
    '@redLighter',
    '@redLight',
    '@red',
    '@redDark',
    '@redDarker',
    
    '@redOrangeLighter',
    '@redOrangeLight',
    '@redOrange',
    '@redOrangeDark',
    '@redOrangeDarker',
    
    '@orangeLighter',
    '@orangeLight',
    '@orange',
    '@orangeDark',
    '@orangeDarker',
    
    '@yellowOrangeLighter',
    '@yellowOrangeLight',
    '@yellowOrange',
    '@yellowOrangeDark',
    '@yellowOrangeDarker',
    
    '@yellowLighter',
    '@yellowLight',
    '@yellow',
    '@yellowDark',
    '@yellowDarker',
    
    '@yellowGreenLighter',
    '@yellowGreenLight',
    '@yellowGreen',
    '@yellowGreenDark',
    '@yellowGreenDarker',
    
    '@greenLighter',
    '@greenLight',
    '@green',
    '@greenDark',
    '@greenDarker',
    
    '@blueGreenLighter',
    '@blueGreenLight',
    '@blueGreen',
    '@blueGreenDark',
    '@blueGreenDarker',
    
    '@blueLighter',
    '@blueLight',
    '@blue',
    '@blueDark',
    '@blueDarker',
    
    '@blueVioletLighter',
    '@blueVioletLight',
    '@blueViolet',
    '@blueVioletDark',
    '@blueVioletDarker',
    
    '@violetLighter',
    '@violetLight',
    '@violet',
    '@violetDark',
    '@violetDarker',
    
    '@redVioletLighter',
    '@redVioletLight',
    '@redViolet',
    '@redVioletDark',
    '@redVioletDarker'
    
);
////
// Gray Scale
$gray_scale = array(
    '@g0',
    '@g1',
    '@g2',
    '@g3',
    '@g4',
    '@g5',
    '@g6',
    '@g7',
    '@g8',
    '@g9',
    '@gA',
    '@gB',
    '@gC',
    '@gD',
    '@gE',
    '@gF'
);
////
// Readable Gray Scale
$readable_gray_scale = array(
    '@black',
    '@grayDarker',
    '@grayDark',
    '@gray',
    '@grayLight',
    '@grayLighter',
    '@white'
);
////
// RGB
$rgb = array(
    '@Rgb',
    '@rGb',
    '@rgB'
);
////
// CMYK
$cmyk = array(
    '@Cmyk',
    '@cMyk',
    '@cmYk',
    '@cmyK'
);
?>

<div class="demo-intro">
    <header class="demo-header">
        <h1>Color Palette</h1>
    </header><!-- .demo-header -->
</div><!-- .demo-intro -->

<div class="demo">
    
    <div class="demo-description">
        <h2>Palette Theme Variables</h2>
    </div>
    <div class="demo-block">
        <ul class="color-palletes theme">
            <?php foreach ($palette as $key=>$color) {
                echo '<li title="'.$color.'" class="c'.($key + 1).'"><p>'.$color.'</p></li>';
            } ?>
        </ul>
    </div>
    
    <div class="demo-description">
        <h2>Gray Scale Variables</h2>
    </div>
    <div class="demo-block">
        <ul class="color-palletes gray-scale">
            <?php foreach ($gray_scale as $key=>$color) {
                echo '<li title="'.$color.'" class="c'.($key + 1).'"><p>'.$color.'</p></li>';
            } ?>
        </ul>
    </div>
    
    <div class="demo-description">
        <h2>Readable Gray Scale Variables</h2>
    </div>
    <div class="demo-block">
        <ul class="color-palletes short-code-gray-scale">
            <?php foreach ($readable_gray_scale as $key=>$color) {
                echo '<li title="'.$color.'" class="c'.($key + 1).'"><p>'.$color.'</p></li>';
            } ?>
        </ul>
    </div>
    
    <div class="demo-description">
        <h2>RGB Variables</h2>
    </div>
    <div class="demo-block">
        <ul class="color-palletes rgb">
            <?php foreach ($rgb as $key=>$color) {
                echo '<li title="'.$color.'" class="c'.($key + 1).'"><p>'.$color.'</p></li>';
            } ?>
        </ul>
    </div>
    
    <div class="demo-description">
        <h2>CMYK Variables</h2>
    </div>
    <div class="demo-block">
        <ul class="color-palletes cmyk">
            <?php foreach ($cmyk as $key=>$color) {
                echo '<li title="'.$color.'" class="c'.($key + 1).'"><p>'.$color.'</p></li>';
            } ?>
        </ul>
    </div>

</div><!-- .demo -->
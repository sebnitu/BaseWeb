<div class="demo-intro">
    <header class="demo-header">
        <h1>Forms</h1>
    </header><!-- .demo-header -->
</div><!-- .demo-intro -->

<div class="demo">
    
    <div class="demo-description">
        <form id="form-classes" class="classes-toggle-widget">
            
            <div class="group">
                <div class="group-key">
                    <label>Layout Options</label>
                </div>
                <div class="group-value">
                    <select name="layout-class">
                        <option value="">None</option>
                        <option value="vertical">Vertical</option>
                        <option value="horizontal" selected="selected">Horizontal</option>
                        <option value="inline">Inline</option>
                    </select>
                </div>
            </div>
            
            <div class="group">
                <div class="group-key">
                    <label>Style Options</label>
                </div>
                <div class="group-value">
                    <select name="style-class">
                        <option value="">None</option>
                        <option value="bordered">Bordered</option>
                        <option value="filled" selected="selected">Filled</option>
                    </select>
                </div>
            </div>
            
            <div class="group">
                <div class="group-key">
                    <label>Key Alignment</label>
                </div>
                <div class="group-value">
                    <label class="radio">
                        <input type="radio" name="key-align" value="" class="radio" checked="selected">
                        None
                    </label>
                    <label class="radio">
                        <input type="radio" name="key-align" value="key-align-left" class="radio">
                        Left
                    </label>
                    <label class="radio">
                        <input type="radio" name="key-align" value="key-align-right" class="radio">
                        Right
                    </label>
                </div>
            </div>
            
            <div class="group">
                <div class="group-key">
                    <label>Value Alignment</label>
                </div>
                <div class="group-value">
                    <label class="radio">
                        <input type="radio" name="value-align" value="" checked="selected">
                        None
                    </label>
                    <label class="radio">
                        <input type="radio" name="value-align" value="value-align-left">
                        Left
                    </label>
                    <label class="radio">
                        <input type="radio" name="value-align" value="value-align-right">
                        Right
                    </label>
                </div>
            </div>
            
            <div class="group">
                <div class="group-key">
                    <label>Auxiliary Options</label>
                </div>
                <div class="group-value">
                    <label class="checkbox">
                        <input type="checkbox" name="auxiliary-classes" value="focus">
                        Focus
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" name="auxiliary-classes" value="hover">
                        Hover
                    </label>
                </div>
            </div>
            
        </form>
    </div>
    <div class="demo-block">
        <p>Current table classes: <code id="form-classes-output">class="horizontal filled"</code></p>
        
        <header class="form-header">
            <h2>Login Form</h2>
        </header>
        
        <form id="form-demo" class="horizontal filled">
            <div class="group">
                <div class="group-key">
                    <label for="username">Username</label>
                </div>
                <div class="group-value">
                    <input type="text" class="" id="username" name="username" placeholder="Username">
                </div>
            </div>
            <div class="group">
                <div class="group-key">
                    <label for="password">Password</label>
                </div>
                <div class="group-value">
                    <input type="password" class="" id="password" name="password" placeholder="Password">
                </div>
            </div>
            <div class="group">
                <div class="group-value">
                    <label class="checkbox">
                        <input type="checkbox"> Remember me
                    </label>
                </div>
            </div>
            <div class="group group-action">
                <div class="group-value">
                    <button class="btn-success">Sign in</button>
                    <button class="btn">Reset Password</button>
                </div>
            </div>
        </form>
    </div>
    
    <?php /*
    
    <div class="demo-description">
        <h2>Input Types</h2>
    </div>
    <div class="demo-block">
        <form class="wrapped vertical">
        
            <label>
                Text
                <input type="text">
            </label>
            
            <label>
                Search
                <input type="search">
            </label>
            
            <label>
                Email
                <input type="email">
            </label>
            
            <label>
                URL
                <input type="url">
            </label>
            
            <label>
                Telephone
                <input type="tel">
            </label>
            
            <label>
                Number
                <input type="number">
            </label>
            
            <hr>
            
            <label>
                Time
                <input type="time">
            </label>
            
            <label>
                Week
                <input type="week">
            </label>
            
            <label>
                Month
                <input type="month">
            </label>
            
            <label>
                Date
                <input type="date">
            </label>
            
            <label>
                Date Time
                <input type="datetime">
            </label>
            
            <label>
                Date Time Local
                <input type="datetime-local">
            </label>
            
            <hr>
            
            <label>
                <input type="radio">
                Radio
            </label>
            
            <label>
                <input type="checkbox">
                Checkbox
            </label>
            
            <hr>
            
            <label>
                Range
                <input type="range">
            </label>
            
            <label>
                Color
                <input type="color">
            </label>
                        
            <label>
                File
                <input type="file">
            </label>
            
            <hr>
            
            <label>
                image
                <input type="image">
            </label>
            
            <label>
                reset
                <input type="reset">
            </label>
            
            <label>
                button
                <input type="button" value="Button">
            </label>
            
            <label>
                submit
                <input type="submit">
            </label>
            
        </form>
    </div>
            
    <div class="demo-description">
        <h2>Wrapped</h2>
    </div>
    <div class="demo-block">
        <form class="wrapped">
            <div class="group">
                <div class="group-key">
                    <label for="email1">Email Address</label>
                </div>
                <div class="group-value">
                    <input type="text" class="input-small" id="email1" placeholder="Email">
                </div>
            </div>
            <div class="group">
                <div class="group-key">
                    <label for="password1">Password</label>
                </div>
                <div class="group-value">
                    <input type="password" class="input-small" id="password1" placeholder="Password">
                </div>
            </div>
            <div class="group">
                <div class="group-key">
                    
                </div>
                <div class="group-value">
                    <label class="checkbox">
                        <input type="checkbox"> Remember me
                    </label>
                </div>
            </div>
            <div class="group group-action">
                <div class="group-value">
                    <button type="submit" class="btn-success">Sign in</button>
                    <button type="submit" class="btn">Reset Password</button>
                </div>
            </div>
        </form>
    </div>
    
    <div class="demo-description">
        <h2>Wrapped Vertical</h2>
    </div>
    <div class="demo-block">
        <form class="wrapped vertical">
            <label>Label name</label>
            <input type="text" placeholder="Type something...">
            <p>Example block-level help text here.</p>
            <label class="checkbox">
                <input type="checkbox"> Check me out
            </label>
            <button type="submit" class="btn">Submit</button>
        </form>
    </div>
    
    <div class="demo-description">
        <h2>Wrapped Vertical Inline</h2>
    </div>
    <div class="demo-block">
        <form class="wrapped vertical inline">
            <input type="text" class="input-small" placeholder="Email">
            <input type="password" class="input-small" placeholder="Password">
            <label class="checkbox">
                <input type="checkbox"> Remember me
            </label>
            <button type="submit" class="btn btn-success">Sign in</button>
        </form>
    </div>
    
    <div class="demo-description">
        <h2>Wrapped Vertical</h2>
    </div>
    <div class="demo-block">
        <form class="wrapped vertical">     
            <input type="text" class="input-mini" placeholder="Mini">
            <input type="text" class="input-tiny" placeholder="Tiny">
            <input type="text" class="input-small" placeholder="Small">
            <input type="text" class="input-default" placeholder="Default"> 
            <input type="text" class="input-large" placeholder="Large">
            <input type="text" class="input-huge" placeholder="Huge">
            <input type="text" class="input-fluid" placeholder="Fluid">
            
            <select class="select-mini">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select class="select-tiny">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select class="select-small">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select class="select-default">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select class="select-large">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select class="select-huge">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <select class="select-fluid">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            
        </form>
    </div>
    
    <div class="demo-description">
        <h2>Horizontal</h2>
    </div>
    <div class="demo-block">
        <form class="horizontal">
            <fieldset>
                <div class="group">
                    <div class="group-key">
                        <label for="input01">Text input</label>
                    </div>
                    <div class="group-value">
                        <input type="text" id="input01">
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Checkbox</label>
                        <p>This is some short text under the group key.</p>
                    </div>
                    <div class="group-value group-checkbox">
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-1" value="optionsCheckbox-1" name="optionsCheckbox">
                            Checkbox Option One
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-2" value="optionsCheckbox-2" name="optionsCheckbox">
                            Checkbox Option Two
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-3" value="optionsCheckbox-3" name="optionsCheckbox">
                            Checkbox Option Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Radio</label>
                        <p>This is some short text under the group key.</p>
                    </div>
                    <div class="group-value group-radio">
                        <label class="radio">
                            <input type="radio" id="optionRadio-1" value="optionRadio-1" name="optionRadio">
                            Radio Option One
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-2" value="optionRadio-2" name="optionRadio">
                            Radio Option Two
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-3" value="optionRadio-3" name="optionRadio">
                            Radio Option Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Inline Checkbox</label>
                    </div>
                    <div class="group-value inline">
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-4" value="optionsCheckbox-4" name="optionsCheckbox2">
                            One
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-5" value="optionsCheckbox-5" name="optionsCheckbox2">
                            Two
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-6" value="optionsCheckbox-6" name="optionsCheckbox2">
                            Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Inline Radio</label>
                    </div>
                    <div class="group-value inline">
                        <label class="radio">
                            <input type="radio" id="optionRadio-4" value="optionRadio-4" name="optionRadio2">
                            One
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-5" value="optionRadio-5" name="optionRadio2">
                            Two
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-6" value="optionRadio-6" name="optionRadio2">
                            Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="select01">Select list</label>
                    </div>
                    <div class="group-value">
                        <select id="select01">
                            <option>something</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="multiSelect">Multicon-select</label>
                    </div>
                    <div class="group-value">
                        <select multiple="multiple" id="multiSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="fileInput">File input</label>
                    </div>
                    <div class="group-value">
                        <input class="input-file" id="fileInput" type="file">
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="textarea">Textarea</label>
                    </div>
                    <div class="group-value">
                        <textarea id="textarea" class="textarea-huge" rows="6"></textarea>
                    </div>
                </div><!-- .group -->
                
                <div class="group group-action">
                    <div class="group-value">
                        <button type="submit" class="btn btn-primary">Save changes</button>
                        <button class="btn">Cancel</button>
                    </div>
                </div><!-- .group -->
            
            </fieldset>
        </form>
    </div>
    
    <div class="demo-description">
        <h2>Horizontal Wrapped</h2>
    </div>
    <div class="demo-block">
        <form class="horizontal wrapped">
            <fieldset>
                <div class="group">
                    <div class="group-key">
                        <label for="input012">Text input</label>
                    </div>
                    <div class="group-value">
                        <input type="text" id="input012">
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Checkbox</label>
                        <p>This is some short text under the group key.</p>
                    </div>
                    <div class="group-value group-checkbox">
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-1" value="optionsCheckbox-1" name="optionsCheckbox">
                            Checkbox Option One
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-2" value="optionsCheckbox-2" name="optionsCheckbox">
                            Checkbox Option Two
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-3" value="optionsCheckbox-3" name="optionsCheckbox">
                            Checkbox Option Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Radio</label>
                        <p>This is some short text under the group key.</p>
                    </div>
                    <div class="group-value group-radio">
                        <label class="radio">
                            <input type="radio" id="optionRadio-1" value="optionRadio-1" name="optionRadio">
                            Radio Option One
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-2" value="optionRadio-2" name="optionRadio">
                            Radio Option Two
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-3" value="optionRadio-3" name="optionRadio">
                            Radio Option Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Inline Checkbox</label>
                    </div>
                    <div class="group-value inline">
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-4" value="optionsCheckbox-4" name="optionsCheckbox2">
                            One
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-5" value="optionsCheckbox-5" name="optionsCheckbox2">
                            Two
                        </label>
                        <label class="checkbox">
                            <input type="checkbox" id="optionsCheckbox-6" value="optionsCheckbox-6" name="optionsCheckbox2">
                            Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label>Inline Radio</label>
                    </div>
                    <div class="group-value inline">
                        <label class="radio">
                            <input type="radio" id="optionRadio-4" value="optionRadio-4" name="optionRadio2">
                            One
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-5" value="optionRadio-5" name="optionRadio2">
                            Two
                        </label>
                        <label class="radio">
                            <input type="radio" id="optionRadio-6" value="optionRadio-6" name="optionRadio2">
                            Three
                        </label>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="select012">Select list</label>
                    </div>
                    <div class="group-value">
                        <select id="select012">
                            <option>something</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="multiSelect2">Multicon-select</label>
                    </div>
                    <div class="group-value">
                        <select multiple="multiple" id="multiSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="fileInput2">File input</label>
                    </div>
                    <div class="group-value">
                        <input class="input-file" id="fileInput2" type="file">
                    </div>
                </div><!-- .group -->
                
                <div class="group">
                    <div class="group-key">
                        <label for="textarea2">Textarea</label>
                    </div>
                    <div class="group-value">
                        <textarea id="textarea2" class="textarea-huge" rows="6"></textarea>
                    </div>
                </div><!-- .group -->
                
                <div class="group group-action">
                    <div class="group-value">
                        <button type="submit" class="btn btn-primary">Save changes</button>
                        <button class="btn">Cancel</button>
                    </div>
                </div><!-- .group -->
            
            </fieldset>
        </form>
    </div>
    
    <div class="demo-description">
        <h2>Horizontal</h2>
    </div>
    <div class="demo-block">
        <form class="horizontal">
            <fieldset>
                
                <div class="group warning">
                    <div class="group-key">
                        <label>Text input</label>
                    </div>
                    <div class="group-value">
                        <input type="text">
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
                <div class="group error">
                    <div class="group-key">
                        <label>Text input</label>
                    </div>
                    <div class="group-value">
                        <input type="text">
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
                <div class="group success">
                    <div class="group-key">
                        <label>Text input</label>
                    </div>
                    <div class="group-value">
                        <input type="text">
                        <p>This is some short text under the group value.</p>
                    </div>
                </div><!-- .group -->
                
            </fieldset>
        </form>
    </div>
    
    */ ?>
    
</div><!-- .demo -->
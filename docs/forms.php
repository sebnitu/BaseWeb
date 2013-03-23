<div class="demo-intro">
    <header class="demo-header">
        <h1>Forms</h1>
    </header><!-- .demo-header -->
</div><!-- .demo-intro -->

<div class="demo">
    
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
                    <button type="submit" class="btn btn-success">Sign in</button>
                    <button type="submit" class="btn">Reset Password</button>
                </div>
            </div>
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
    
</div><!-- .demo -->
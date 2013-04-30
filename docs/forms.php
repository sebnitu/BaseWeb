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
                        <option value="bordered" selected="selected">Bordered</option>
                        <option value="filled">Filled</option>
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
        
        <div class="login-form-wrap">
        
            <header class="form-header">
                <h2>Login Form</h2>
            </header>
            
            <form id="form-demo" class="horizontal bordered">
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
        
    </div>
    
</div><!-- .demo -->
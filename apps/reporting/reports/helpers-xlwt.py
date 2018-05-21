import xlwt

def buildFont(target_style = None, **kwargs):
    '''
    '''
    
    font = xlwt.Font()
    font.height =  kwargs.get('font_height', 12) * 20
    font.bold = kwargs.get('is_bold', False)
    font.italic = kwargs.get('is_italic', False)
    font.colour_index = xlwt.Style.colour_map[kwargs.get('font_color', 'black')]
    font.family = kwargs.get('family','Arial')  

    if target_style != None:
        target_style.font = font
        return target_style
    return font

def buildBackground(target_style = None, **kwargs):
    '''
    Builds a cell background style.
    Paramters: type --> solid, no pattern
    color: background coloring
    '''
    pattern = xlwt.Pattern()

    pattern.pattern=xlwt.Style.pattern_map[kwargs.get('pattern_type', 'none')]
    
    pattern.pattern_back_colour = xlwt.Style.colour_map[kwargs.get('back_color', 'white')]
    pattern.pattern_fore_colour = xlwt.Style.colour_map[kwargs.get('fore_color', 'white')]

    #if a target style is provided, directly apply the pattern to it
    if target_style != None:
        target_style.pattern = pattern
        return target_style.pattern
    return pattern    

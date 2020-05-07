import re

class item:
    def __init__(self, item_id, spec):
        self.item_id = item_id
        self.type = spec['type'].replace(' ', '_')
        self.arguments = spec['arguments']
        try:
            self.tags = spec['tags']
        except:
            self.tags = None

    def render(self):
        print('--------------------------------')
        print('Item ID:', self.item_id)
        print('Tags:', self.tags)
        print()

class multi_choice(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        item.render(self)
        for choice in self.arguments['choices']:
            choice_id, choice_text = list(choice.items())[0]
            print('[%s] %s' % (choice_id, choice_text))
        print()

class text(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        item.render(self)
        text_orig = self.arguments['text']
        text_rep = re.sub(r"\{([^:]+):([^}]+)\}", '[______]', text_orig)
        print(text_rep)
        print()

class multi_text(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        item.render(self)
        text_orig = self.arguments['text']
        text_rep = re.sub(r"\{([^:]+):([^}]+)\}", '[______]', text_orig)
        print(text_rep)
        print()

class slider(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        item.render(self)
        text_orig = self.arguments['text']
        text_rep = re.sub(r"\{([^:]+):([^}]+)\}", '[______]', text_orig)
        print(text_rep)
        print()

class multiple_items(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        super().render()
        for item in self.arguments['items']:
            print(item)
        print()

class instruction(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        item.render(self)
        print(self.arguments['title'])
        print(self.arguments['text'])
        print()


class fullscreen(item):
    def __init__(self, item_id, spec):
        item.__init__(self, item_id, spec)

    def render(self):
        item.render(self)
        print(self.arguments['text'])
        print()

import yaml
import importlib

# Read items.
items = yaml.safe_load(open('items.yaml','r'))
print(yaml.dump(items))

# Import item types module.
items_module = importlib.import_module('items')

# Empty list for adding constructed item objects.
item_sequence = []

for item in items:
    # Get item id and specification.
    item_id, spec = list(item.items())[0]

    # Get actual class according to item type.
    class_name = spec['type'].replace(' ', '_')
    cls = items_module.__dict__[class_name]    

    # Create object.
    new_item_object = cls(item_id, spec)

    # Add to list.
    item_sequence.append(cls(item_id, spec))

for item_obj in item_sequence:
    item_obj.render()

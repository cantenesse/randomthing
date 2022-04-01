import os
import sys
import json
import filetype
import math

index_data = []

os.chdir('server/')
kb_threshold = 1024
mb_threshold = kb_threshold * 1024
gb_threshold = mb_threshold * 1024

def get_file_type(file_path):
  kind = filetype.guess(file_path)
  if kind is None: 
    return file_path.split('.')[-1]
  else: 
    return kind.mime

def get_file_size(file_path):
  file_size = os.stat(file_path).st_size
  if file_size < kb_threshold:
    return f'{int(file_size)} bytes'
  elif file_size < mb_threshold:
    return f'{int(file_size / kb_threshold)} KB'
  elif file_size < gb_threshold:
    return f'{int(file_size / mb_threshold)} MB'
  else:
    return f'{int(file_size / gb_threshold)} GB'


def extract_indexed_data(name, file_path):
  return {
    "id": str(len(index_data)),
    "path": file_path,
    "name": name,
    "contentType": get_file_type(file_path),
    "size": get_file_size(file_path)
  }

for test_dir, subdirs, file_list in os.walk('test_data'):
  for index, name in enumerate(file_list): 
    file_path = os.path.join(test_dir, name)
    index_data.append(extract_indexed_data(name, file_path))
  
print(json.dumps(index_data))
sys.stdout.flush()



# def extract_indexed_data()

# def current_path();
#   return os.path.dirname(os.path.realpath( __file__ ))
import requests

def download_file(url, filename):
  """
  Downloads a file from the specified URL and saves it with the given filename.

  Args:
      url (str): The URL of the file to download.
      filename (str): The name of the file to save the downloaded data as.
  """
  # Send a GET request to the URL
  response = requests.get(url, stream=True)

  # Check if the request was successful
  if response.status_code == 200:
    # Open the file in binary write mode
    with open(filename, "wb") as f:
      for chunk in response.iter_content(1024):
        # Write the downloaded data in chunks to avoid memory issues with large files
        if chunk:  # filter out keep-alive new chunks
          f.write(chunk)
    print(f"File downloaded successfully: {filename}")
  else:
    print(f"Download failed: {response.status_code}")

# Example usage
file_url = "http://movie.basnetbd.com/Data/TV%20Series/Game%20of%20Thrones/Season%2003/Game.Of.Thrones.S03E01.1080p.5.1Ch.BluRay.ReEnc-DeeJayAhmed.mkv"
local_filename = "downloaded_file.mkv"
download_file(file_url, local_filename)